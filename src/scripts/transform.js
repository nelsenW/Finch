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
  ctx.putImageData(currChar, 100, 100);
  setTimeout(() => {
    if (!transformed) {
      transform(currChar, nextChar, ctx, false);
    }
  }, 0);
}
