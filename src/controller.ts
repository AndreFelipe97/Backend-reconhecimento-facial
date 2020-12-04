import { Request, Response } from 'express';

import '@tensorflow/tfjs-node';

import * as canvas from 'canvas';

import * as faceapi from 'face-api.js';

export default class ReconhecimentoController {
  async index(request: Request, response: Response): Promise<Response> {
    console.log(request.file)
    const { Canvas, Image, ImageData } = canvas
    // await faceapi.env.monkeyPatch({ Canvas, Image, ImageData } )
    await faceapi.nets.ageGenderNet.loadFromDisk('./src/models')
    await faceapi.nets.faceExpressionNet.loadFromDisk('./src/models')
    await faceapi.nets.faceLandmark68Net.loadFromDisk('./src/models')
    await faceapi.nets.faceLandmark68TinyNet.loadFromDisk('./src/models')
    await faceapi.nets.faceRecognitionNet.loadFromDisk('./src/models')
    await faceapi.nets.mtcnn.loadFromDisk('./src/models')
    await faceapi.nets.ssdMobilenetv1.loadFromDisk('./src/models')
    await faceapi.nets.tinyFaceDetector.loadFromDisk('./src/models')
    console.log(faceapi.nets)
    return response.status(200).json({ message: 'Reconhecimento facial' });
  }
}
