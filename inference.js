const tfjs = require('@tensorflow/tfjs-node');
function loadModel() {
  const modelUrl = "https://storage.googleapis.com/aexon/model/model.json";
  return tfjs.loadGraphModel(modelUrl);
}
 
function predict(model, imageBuffer) {
  //const tfImg = tfjs.fromPixels(imageBuffer);
  //const smalImg = tfjs.image.resizeBilinear(tfImg, [224, 224]);
  //const resized = tfjs.cast(smalImg, 'float32');
  //const t4d = tfjs.tensor4d(Array.from(resized.dataSync()),[-1,368,432,3])  

const tensor = tfjs.node
    .decodePng(imageBuffer)
    .resizeBilinear([224, 224])
    .toFloat()
    .expandDims(0);
//const tensors = tfjs.tensor4d(Array.from(tensor.dataSync()),[1,224,224,3]);
  //tensor = imageBuffer;
  return model.predict(tensor).data();;
}
 
module.exports = { loadModel, predict };
