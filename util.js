function resizeCanvas(canvas){
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight

  // 检查尺寸是否相同
  if(canvas.width !== displayWidth || canvas.height !== displayHeight){
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }

}

function createSimpleProgram(gl,vertexShaderElement = '#vertexShader',fragmentShaderElement = '#fragmentShader'){
  // 获取 定点着色器中源码
  const vertexShaderSource = document.querySelector(vertexShaderElement).innerHTML;
  const vertexShader = createVertexShader(gl,vertexShaderSource)

  // 获取片元着色器 
  const fragmentShaderSource = document.querySelector(fragmentShaderElement).innerHTML;
  const fragmentShader = createFragmentShader(gl,fragmentShaderSource)

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  // 获取链接状态 
  const success = gl.getProgramParameter(program,gl.LINK_STATUS)
  if(success){
    return program
  }
}

/**
 * 创建定点着色器 并编译
 * @param {*} gl 
 * @param {*} source 
 * @returns 
 */
function createVertexShader(gl,source){
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertexShader,source)
  gl.compileShader(vertexShader)
  return vertexShader
}

/**
 * 创建片元着色器 并编译
 * @param {*} gl 
 * @param {*} source 
 * @returns 
 */
function createFragmentShader(gl,source){
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader,source)
  gl.compileShader(fragmentShader)
  return fragmentShader
}
