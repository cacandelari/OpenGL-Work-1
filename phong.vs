/*
References the LearnOpenGL basic lighting tutorial:
https://learnopengl.com/Lighting/Basic-Lighting
*/
#version 330 core
layout (location = 0) in vec3 position; 
layout (location = 1) in vec3 normal;
//These are the normal vector and directional light ray needed to calculate light diffusion


out vec3 Normal;
out vec3 FragPos;
out vec3 LightPos;

uniform vec3 lightPos;//lightPos passes to the fragment shader

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    // TODO: Your code here
    // Remember to set gl_Position (correctly) or you will get a black screen...
	//vec4 posVec = vec4(position,1.0f);


    gl_Position = projection*view*model* vec4(position, 1.0);
	FragPos = vec3(view * model * vec4(position, 1.0));
	Normal = mat3(transpose(inverse(view * model))) * normal;	
	/*setting up the world space lighting calculations for the vertex shader
	the Normal mat3 is used to fix distortion problems with the lighting for when
	the normal vectors are not perpendicular to the surface
	
	Inversing a matrix is a costly operation and should be avoided in shaders since it would 
	have to be calculated for each vertex, here it is fine
	*/

	LightPos = vec3(view * vec4(lightPos, 1.0));// This transforms the light into view-space
	
} 


/*
//unshaded cube

	vec4 posVec = vec4(position,1.0f);
    gl_Position = projection*view*model*posVec;

*/