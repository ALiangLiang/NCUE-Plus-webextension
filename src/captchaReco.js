const WIDTH = 13,
  HEIGHT = 14;
const CHECK_RATE = 0.87;
//indices of black
const ATLAS = [
  [23, 27, 31, 35, 71, 75, 79, 83, 87, 91, 119, 123, 143, 147, 171, 199, 223, 255, 271, 303, 307, 323, 355, 359, 375, 411, 427, 463, 483, 511, 515, 535, 563, 587, 591, 611, 615, 639, 643, 647, 651, 655, 659, 663, 699, 703, 707, 711],
  [23, 27, 75, 79, 119, 123, 127, 131, 171, 183, 231, 235, 283, 287, 339, 387, 391, 439, 491, 543, 599, 639, 643, 647, 651, 655, 691, 695, 699, 703, 707],
  [23, 27, 31, 35, 71, 75, 79, 83, 87, 91, 95, 119, 123, 143, 147, 171, 195, 199, 247, 251, 295, 299, 343, 347, 351, 391, 395, 439, 487, 587, 639, 643, 647, 651, 655, 659, 663, 667, 691, 695, 699, 703, 707, 711, 715, 719],
  [23, 27, 31, 71, 75, 79, 83, 87, 91, 143, 195, 199, 247, 291, 295, 299, 339, 343, 399, 403, 455, 511, 535, 563, 587, 611, 615, 643, 647, 651, 655, 659, 663, 699, 703, 707, 711],
  [35, 39, 83, 87, 91, 135, 139, 143, 183, 195, 231, 247, 283, 299, 331, 347, 351, 379, 399, 403, 427, 431, 435, 439, 443, 447, 451, 455, 459, 479, 483, 487, 491, 495, 499, 503, 507, 511, 515, 559, 611, 659, 663, 711],
  [15, 19, 23, 27, 31, 35, 39, 43, 67, 71, 75, 79, 83, 87, 91, 95, 171, 223, 235, 239, 243, 275, 279, 283, 287, 291, 295, 299, 303, 327, 331, 351, 355, 379, 407, 511, 563, 587, 607, 611, 615, 643, 647, 651, 655, 659, 663, 699, 703, 707],
  [31, 79, 83, 127, 175, 179, 223, 227, 275, 283, 287, 291, 295, 323, 327, 331, 335, 339, 343, 347, 351, 375, 379, 403, 407, 427, 459, 479, 511, 531, 535, 587, 591, 611, 639, 643, 647, 651, 655, 659, 663, 699, 703, 707, 711],
  [15, 19, 23, 27, 31, 35, 39, 43, 47, 67, 71, 75, 79, 83, 87, 91, 95, 99, 143, 147, 195, 243, 291, 295, 343, 443, 495, 595, 647, 695],
  [23, 27, 31, 35, 67, 71, 75, 79, 83, 87, 91, 119, 143, 171, 199, 223, 227, 247, 275, 279, 283, 287, 291, 295, 331, 335, 339, 343, 347, 351, 383, 403, 407, 431, 455, 459, 483, 511, 535, 563, 587, 611, 615, 643, 647, 651, 655, 659, 663, 695, 699, 703, 707, 711]
];
/**
 * @param {Object} CanvasRenderingContext2D "image data"
 * @description Change image data into black-and-white.
 */
function enblack(ctx) {
  var imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
  for (var i = 0; i < imgData.data.length; i += 4) {
    if (imgData.data[i] !== 0 || imgData.data[i + 1] !== 0 || imgData.data[i + 2] !== 0) {
      imgData.data[i] = 0;
      imgData.data[i + 1] = 0;
      imgData.data[i + 2] = 0;
      imgData.data[i + 3] = 0;
    }
  }
  return imgData;
}

function ai(imgData, atlases) {
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  var rate = [];
  for (var i = 0; i < atlases.length; i++) {
    var ex = atlases[i].getImageData(0, 0, WIDTH, HEIGHT);
    var bingo = 0;
    for (var t = 0; t < ex.data.length; t += 4) {
      if (ex.data[t + 3] == imgData.data[t + 3]) {
        bingo++;
      }
    }
    rate.push(bingo / (WIDTH * HEIGHT));
  }
  return {
    rate: rate.max(),
    answer: rate.indexOf(rate.max()),
  };
}

(function() {
  const
    target = document.getElementById("imgCode") || document.getElementById("ctl00_ContentPlaceHolder2_imgCode"),
    input = document.getElementById("txtCode") || document.getElementById("ctl00_ContentPlaceHolder2_txtCode"),
    atlases = [];
  input.value = '';
  for (var i = 0; i < 9; i++) {
    const canvas = document.createElement("canvas");
    canvas.height = HEIGHT;
    if (i === 1)
      canvas.width = 10;
    else
      canvas.width = WIDTH;
    atlases[i] = canvas.getContext("2d");
    var imgData = atlases[i].getImageData(0, 0, WIDTH, HEIGHT);
    for (var t = 0; t < ATLAS[i].length; t++) {
      imgData.data[ATLAS[i][t]] = 255;
    }
    atlases[i].putImageData(imgData, 0, 0);
  }
  const canvas = document.createElement("canvas");
  canvas.height = HEIGHT;
  canvas.width = WIDTH;
  var
    lastAnswer,
    offsetX = 2;
  for (i = 0; i < 4; i++) {
    canvas.getContext("2d").drawImage(target, offsetX, 4, 13, 14, 0, 0, 13, 14);
    var result = ai(enblack(canvas.getContext("2d")), atlases);
    if (result.rate > CHECK_RATE) {
      console.log("answer%d: %d", i, result.answer);
      input.value += result.answer;
      lastAnswer = result.answer;
    } else {
      console.log("Has wrong answer.");
      return;
    }
    if (lastAnswer === 1)
      offsetX += 9;
    else
      offsetX += 12;
  }
  const
    text = document.createTextNode('成功辨識圖形驗證碼。'),
    span = document.createElement('span');
  span.style = 'color:red';
  span.appendChild(text);
  input.parentNode.appendChild(span);
})();
