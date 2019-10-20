/*
References the LearnOpenGL basic lighting tutorial:
https://learnopengl.com/Lighting/Basic-Lighting
*/

#version 330 core
out vec4 color;
out vec4 FragColor;

in vec3 FragPos; //pulling the world space lighting calculations from vertex shader
in vec3 Normal; //pulling from the vertex shader
in vec3 LightPos;
  
uniform vec3 lightPos; //light source location
uniform vec3 viewPos; //specular lighting set up to get our view
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // TODO: Replace with your code...
    // If gl_Position was set correctly, this gives a totally red cube
    //color = vec4(vec3(1.f,0.f,0.f), 1.0f);
	

	///
	float ambientStrength = 0.1; //the higher the value, the brighter the cube 
	vec3 ambient = ambientStrength * lightColor;
	
	vec3 norm = normalize(Normal);
	vec3 lightDir = normalize(LightPos - FragPos);
	//Always remember to normalize the light direction vector
	//Since it's lighting we don't care too much about magnitude or position, just direction


	float diff = max(dot(norm, lightDir), 0.0);
	vec3 diffuse = diff * lightColor;
	/*calculating the diffuse of the light on the fragment by taking the dot product
	If the angle between both vectors is greater than 90, the dot product will be negative
	which means a negative diffuse as well
	*/

	float specularStrength = 0.5;
	vec3 viewDir = normalize(-FragPos);
	vec3 reflectDir = reflect(-lightDir, norm); // to ensure we get the correct reflected vector we use -lightDir

	float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
	vec3 specular = specularStrength * spec * lightColor;
	/*calculating the specular component with the dot product of viewDir and reflectDir
	and then raising to the power of 32 to control the highlight value or the shine

	
	*/
	vec3 result = (ambient + diffuse + specular) * objectColor;
	FragColor = vec4(result, 1.0);
	//Add the specular component to the diffuse and ambient components to get the color

	
}


/*
float ambientStrength = 0.1;
	vec3 ambient = ambientStrength * lightColor;

	vec3 result = ambient * objectColor;
	FragColor = vec4(result, 1.0);
*/
