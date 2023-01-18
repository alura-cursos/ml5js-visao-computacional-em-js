const MOUTH_CLOSED = "fechada";
const MOUTH_OPEN = "aberta";

function getNewSize(video) {
  let minProp;
  // const width = windowWidth;
  // const height = windowHeight;
  if (video.width < video.height) {
    const propW = width / video.width;
    minProp = propW;
  } else {
    const propH = height / video.height;
    minProp = propH;
  }
  // const nw = Math.round(video.width * minProp);
  // const nh = Math.round(video.height * minProp);
  const nw = video.width;
  const nh = video.height;
  console.log(`Redimensionando para ${nw}x${nh}`);
  return [nw, nh];
}


export class CapturaDeFaces {

  constructor(options) {
    const w = windowWidth;
    const h = windowHeight;
    this.options = {
      maxFaces: 1,
      distanciaParaBocaAberta: 7,
      aspectRatio: 16 / 9,
      ...options
    };
    createCanvas(w, h);
    const cameraConstraints = {
      video: {
        facingMode: "user",
        width: { max: w, ideal: 1920 },
        height: { max: h, ideal: 1080 },
        aspectRatio : {
          ideal : this.options.aspectRatio
        }
      }

    };

    this.ready = false;
    this.predictions = [];
    this.video = createCapture(cameraConstraints);
    this.facemesh = ml5.facemesh(this.video, this.options, () => this.modelReady());
    this.facemesh.on("predict", (r) => this.saveResults(r));
    this.video.hide();
  }

  modelReady() {
    this.ready = true;
    console.log("Modelo está pronto");
    const size = getNewSize(this.video);
    resizeCanvas(size[0], size[1]);
  }

  saveResults(results) {
    this.predictions = results;
  }

  faces() {
    const faces = [];
    for (const p of this.predictions) {

      const u = p.annotations.lipsUpperInner[5];
      const l = p.annotations.lipsLowerInner[5];
      const v1 = createVector(...u);
      const v2 = createVector(...l);
      const d = v1.dist(v2);
      const mouthStatus = d > this.options.distanciaParaBocaAberta ? MOUTH_OPEN : MOUTH_CLOSED;
      const mid = p5.Vector.add(v1, v2).div(2);

      const f = {
        boca: {
          situacao: mouthStatus,
          centro: mid
        },
        predicao: p
      };
      faces.push(f);
    }
    return faces;
  }

  face() {
    const faces = this.faces();
    if (faces.length >= 1) {
      return faces[0];
    }
    return undefined;
  }

  desenha() {
    image(this.video, 0, 0, width, height);
  }

  estaPronto() {
    return this.ready;
  }

}