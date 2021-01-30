#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float plot(vec2 st,float p){
  float thickness=.001;
  return smoothstep(p-thickness,p,st.y)-smoothstep(p,p+thickness,st.y);
}

void main(void){
  vec2 st=gl_FragCoord.xy/resolution;
  float y=2.+sin(time+mouse.y+11.*st.x);
  y=y/4.;
  vec3 color=vec3(y);
  
  float p=plot(st,y);
  
  color=p*vec3(1.,.2,1.);
  
  gl_FragColor=vec4(color,1.);
}