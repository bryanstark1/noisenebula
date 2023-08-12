import { Response, Request } from "express";
import crypto from 'crypto';
import S3 from "aws-sdk/clients/s3";
import Song from "../../models/song";

import dotenv from 'dotenv'


dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID ?? ""
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY ?? ""

const s3 = new S3();

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

export const getSongs = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Song.find().exec());
  } catch (error) {
    res.status(400).json(error);
  };
};

export const getSong = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Song.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  };
};

export const addSong = async (req: Request, res: Response): Promise<void> => {
  // const file: any = req.file
  const body = req.body
  const songFileName = generateFileName();
  
  const filePath = `noisenebula/songs/${songFileName}`;
  const params: any = {
    Bucket: bucketName,
    Key: filePath,
    Body: req.file?.buffer
  };
  
  s3.upload(params, async function(err: any, data: any){
    if(err){
      console.log('===========================================')
			console.log(err, ' err from aws, either your bucket name is wrong or your keys arent correct');
			console.log('===========================================')
			res.status(400).json({error: 'Error from aws, check your terminal!'})
    }
    try {
      const post = await Song.create({
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album,
        audioFile: data.Location
      });
      res.json(post);
    } catch (error) {
      res.status(400).json(error);
    };
  });
};

export const updateSong = async (req: Request, res: Response): Promise<void> => {
  const songId = req.params.id;
  try {
    res.json(await Song.findByIdAndUpdate(songId, req.body, { new: true }));
  } catch (error) {
    res.status(400).json(error);
  };
};

export const deleteSong = async (req: Request, res: Response): Promise<void> => {
  const song = await Song.findById(req.params.id);
  const filePath = song?.audioFile.replace('https://noisenebula.s3.amazonaws.com/', '');
  const params: any = {
    Bucket: bucketName,
    Key: filePath,
  };
  s3.deleteObject(params, async function(err: any, data: any){
    if(err){
      console.log('===========================================')
			console.log(err, ' err from aws, either your bucket name is wrong or your keys arent correct');
			console.log('===========================================')
			res.status(400).json({error: 'Error from aws, check your terminal!'})
    }
    try {
      res.json(await Song.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    };
  });
};