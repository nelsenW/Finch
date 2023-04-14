export default function transform(currChar, nextChar, ctx, transformed) {
  transformed = true;

  for (let i = 0; i < currChar.data.length; i += 1) {
    if (currChar.data[i] > nextChar.data[i]) {
      currChar.data[i] -= 1;
      if (transformed) {
        transformed = false;
      }
    } else if (currChar.data[i] < nextChar.data[i]) {
      currChar.data[i] += 1;
      if (transformed) {
        transformed = false;
      }
    }
  }
  // simple color shift from start to end

  // pixels move outward

  // create circle around center pixel

  // blast outwards

  for (let i = 0; i < currChar.data.length; i += 4) {
    let j = Math.floor(i / 256);
    let k = (i - j * 256) / 4;
    let newPix;
    if (j > 31 && k > 31) {
      newPix = (j + 1) * 256 + (k + 1) * 4;
    } else if (j > 31 && k <= 31) {
      newPix = (j + 1) * 256 + (k - 1) * 4;
    } else if (j <= 31 && k > 31) {
      newPix = (j - 1) * 256 + (k + 1) * 4;
    } else {
        newPix = (j - 1) * 256 + (k - 1) * 4;
    }
    currChar.data[newPix] = currChar.data[i]
    currChar.data[newPix + 1] = currChar.data[i + 1]
    currChar.data[newPix + 2] = currChar.data[i + 2]
    currChar.data[newPix + 3] = currChar.data[i + 3]

  }

  ctx.putImageData(currChar, 100, 100);
  //   setTimeout(() => {
  //     if (!transformed) {
  //       transform(currChar, nextChar, ctx, false);
  //     }
  //   }, 0);
}
