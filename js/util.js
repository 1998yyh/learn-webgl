function createCanvas(){
  const canvas = document.createElement('canvas')
  canvas.width = 600;
  canvas.height = 400;
  const gl = canvas.getContext('webgl')
  document.body.appendChild(canvas)

  return {gl,canvas}
}

function createSimpleProgram(gl){
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const vertexShaderSource = document.querySelector('#vertexShader').innerHTML;
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.compileShader(vertexShader)

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  const fragmentShaderSource = document.querySelector('#fragmentShader').innerHTML;
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader)

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  return program
}