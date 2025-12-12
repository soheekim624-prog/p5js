let colorStart; 
let colorEnd; 

function setup() { 
  createCanvas(450, 300); 
  // HSB 색상 모드 설정
  colorMode(HSB, 360, 100, 100); 
  
  // 색상 변수 초기화 (lerpColor에 사용됨)
  colorStart = color(30, 90, 90);  // 노랑/주황 계열
  colorEnd = color(300, 90, 80);   // 자주/보라 계열
} 

function draw() { 
  // 애니메이션 속도 제어 변수
  let animTime = frameCount * 0.03; 
  
  // -------------------------
  // 1. 배경 (은은하게 맥동하는 채도)
  // -------------------------
  let bgSat = map(sin(animTime * 0.5), -1, 1, 10, 30);
  background(220, bgSat, 20); 

  let cx = width / 2;
  let cy = height / 2;
  rectMode(CENTER);
  noStroke();

  // -------------------------
  // 2. 사각형 배경 프레임 (고정)
  // -------------------------
  fill(240, 70, 80, 80);
  rect(cx - 37.5, cy + 22.5, 225, 150); 

  // -------------------------
  // 3. 큰 원 (크기 팽창/수축 및 수직 이동)
  // -------------------------
  let bigCircleSize = map(cos(animTime * 0.7), -1, 1, 135, 165);
  let bigCircleY = cy - 60 + sin(animTime * 1.5) * 3.75;
  fill(60, 90, 95, 90);
  ellipse(cx + 75, bigCircleY, bigCircleSize, bigCircleSize); 

  // -------------------------
  // 4. 중간 원 (테두리 색상 변환)
  // -------------------------
  let t = (sin(animTime * 0.6) + 1) / 2;
  let redCircleStroke = lerpColor(colorStart, colorEnd, t);
  stroke(redCircleStroke);
  strokeWeight(6);
  fill(0, 80, 90, 70);
  ellipse(cx, cy, 112.5, 112.5); 
  noStroke();

  // -------------------------
  // 5. 회전하는 흰색 사각형 (프레임)
  // -------------------------
  fill(0, 0, 100, 50);
  push();
  translate(cx - 75, cy - 75);
  rotate(animTime / 2); // 느린 회전
  rect(0, 0, 150, 37.5);
  pop();

  // -------------------------
  // 6. 작은 검은색 사각형 (수평 왕복 운동)
  // -------------------------
  let smallRectX = cx - 112.5 + sin(animTime * 2.5) * 11.25;
  noStroke();
  fill(0, 0, 0);
  rect(smallRectX, cy + 75, 37.5, 37.5); 

  // -------------------------
  // 7. 움직이는 삼각형 (수직 이동)
  // -------------------------
  let triOffset = cos(animTime * 1.5) * 15;
  stroke(180, 90, 85);
  strokeWeight(3.75);
  fill(180, 90, 85, 90);
  triangle( 
    cx + 135, cy + 75 + triOffset, 
    cx + 187.5, cy + 15 + triOffset, 
    cx + 75, cy + 15 + triOffset 
  ); 
} 

function mousePressed() { 
  // 마우스 클릭 시 300프레임 GIF 저장 (약 10초 분량)
  saveGif('animated_abstract_art_small', 300, {delay: 0, units: 'frames', quality: 5}); 
}
