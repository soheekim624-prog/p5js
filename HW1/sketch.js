let colorStart; 
let colorEnd; 

function setup() {
  // 캔버스 크기 고정
  createCanvas(450, 300); 
  colorMode(HSB, 360, 100, 100); 
  
  colorStart = color(30, 90, 90);
  colorEnd = color(300, 90, 80);
  
  // draw 함수가 한 번만 실행되도록 설정 (움직임 제거)
  noLoop(); 
} 

function draw() {
  // 애니메이션 시간 변수 제거: 고정된 값 사용
  let fixedTime = 0.5; // 애니메이션 상태를 중간값으로 고정

  // 배경색: 고정값 사용 (220, 20, 20)
  background(220, 20, 20); 

  let cx = width / 2;
  let cy = height / 2;

  rectMode(CENTER); 
  noStroke();
  fill(240, 70, 80, 80); 
  rect(cx - 37.5, cy + 22.5, 225, 150);

  // bigCircleSize 및 bigCircleY: 고정값 사용
  let bigCircleSize = 150; // cos(animTime * 0.7)의 평균값 근처
  let bigCircleY = cy - 60; // sin(animTime * 1.5) 제거
  
  fill(60, 90, 95, 90); 
  ellipse(cx + 75, bigCircleY, bigCircleSize, bigCircleSize);

  // 색상 보간(lerpColor) 제거: 고정된 중간 색상 사용
  let redCircleStroke = lerpColor(colorStart, colorEnd, fixedTime);
  
  stroke(redCircleStroke); 
  strokeWeight(6);
  fill(0, 80, 90, 70); 
  ellipse(cx, cy, 112.5, 112.5);

  noStroke();
  fill(0, 0, 100, 50); 
  push(); 
  translate(cx - 75, cy - 75);
  // rotate(animTime / 2); 제거: 회전 각도 0으로 고정
  rect(0, 0, 150, 37.5);
  pop(); 

  // smallRectX: 고정값 사용
  let smallRectX = cx - 112.5; // sin(animTime * 2.5) 제거
  
  noStroke();
  fill(0, 0, 0); 
  rect(smallRectX, cy + 75, 37.5, 37.5);

  // triOffset: 고정값 사용
  let triOffset = 0; // cos(animTime * 1.5) 제거
  
  stroke(180, 90, 85); 
  strokeWeight(3.75);
  fill(180, 90, 85, 90); 
  
  triangle(
    cx + 135, cy + 75 + triOffset, 
    cx + 187.5, cy + 15 + triOffset,   
    cx + 75, cy + 15 + triOffset    
  );
}

// mousePressed() 함수 제거 (GIF 저장 기능 제거)
