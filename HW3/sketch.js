let mouthOpen = false; 
let blink = false; 

function setup() { 
  createCanvas(600, 400); 
  frameRate(30); // gif 저장용으로 30fps 
} 

function draw() { 
  background(255); 

  // 깜빡임 제어: 60프레임마다 깜빡이기 (약 2초 간격) 
  if (frameCount % 60 === 0) { 
    blink = true; 
  } 
  if (frameCount % 60 === 10) { 
    blink = false; 
  } 

  // ------------------------ 
  // 머리카락 
  // ------------------------ 
  fill(80, 50, 20); 
  arc(width/2, height/2 - 120, 240, 200, PI, TWO_PI); 
  rect(width/2 - 120, height/2 - 120, 240, 300); 

  // ------------------------ 
  // 얼굴형 
  // ------------------------ 
  fill(255, 235, 220); 
  ellipse(width/2, height/2, 170, 230); 

  // ------------------------ 
  // 귀 
  fill(255, 235, 220); 
  ellipse(width/2 - 85, height/2, 25, 45); 
  ellipse(width/2 + 85, height/2, 25, 45); 

  // 귀걸이 
  fill(200, 160, 60); 
  ellipse(width/2 - 85, height/2 + 30, 15, 15); 
  ellipse(width/2 + 85, height/2 + 30, 15, 15); 

  // ------------------------ 
  // 눈 
  if (blink) { 
    // 감긴 눈 
    stroke(0); 
    strokeWeight(2); 
    line(width/2 - 70, height/2 - 30, width/2 - 20, height/2 - 30); // 왼쪽 눈 
    line(width/2 + 20, height/2 - 30, width/2 + 70, height/2 - 30); // 오른쪽 눈 
    noStroke(); 
  } else { 
    // 눈 뜬 상태 
    fill(255); 
    ellipse(width/2 - 45, height/2 - 30, 55, 30); // 왼쪽 눈 
    ellipse(width/2 + 45, height/2 - 30, 55, 30); // 오른쪽 눈 
    
    // 동공 
    fill(40, 20, 10); 
    ellipse(width/2 - 45, height/2 - 30, 20, 20); 
    ellipse(width/2 + 45, height/2 - 30, 20, 20); 
    
    // 반짝임 
    fill(255); 
    ellipse(width/2 - 50, height/2 - 35, 6, 6); 
    ellipse(width/2 + 40, height/2 - 35, 6, 6); 
  } 

  // 쌍꺼풀 
  stroke(120); 
  noFill(); 
  arc(width/2 - 45, height/2 - 32, 60, 18, PI, TWO_PI); 
  arc(width/2 + 45, height/2 - 32, 60, 18, PI, TWO_PI); 
  noStroke(); 

  // 눈썹 
  stroke(60, 30, 10); 
  strokeWeight(4); 
  line(width/2 - 65, height/2 - 55, width/2 - 25, height/2 - 60); 
  line(width/2 + 25, height/2 - 60, width/2 + 65, height/2 - 55); 
  noStroke(); 

  // ------------------------ 
  // 코 
  fill(255, 220, 200); 
  triangle(width/2, height/2 - 5, width/2 - 7, height/2 + 25, width/2 + 7, height/2 + 25); 

  // ------------------------ 
  // 입 
  stroke(200, 50, 90); 
  strokeWeight(4); 
  noFill(); 

  if (mouseIsPressed) { 
    // 크게 웃는 입 (입 열림) 
    arc(width/2, height/2 + 65, 100, 80, 0, PI); 
  } else if (keyIsPressed) { 
    // 닫힌 미소 
    arc(width/2, height/2 + 65, 80, 10, 0, PI); 
  } else { 
    // 기본 웃는 입 
    arc(width/2, height/2 + 65, 80, 40, 0, PI); 
  } 
  noStroke(); 

  // ------------------------ 
  // 옷 
  fill(120, 160, 220); 
  rect(width/2 - 90, height/2 + 110, 180, 120, 20); 
}
