Open GL cube shading program for a computer graphics course at the University of Houston
Colin Candelari

# HW3

Coded and compiled in Visual Studio 2017.

Used the LearnOpenGL Basic Lighting tutorial as a reference: 
https://learnopengl.com/Lighting/Basic-Lighting

Property Pages: Additional Include Directories: 
$(SolutionDir)Dependencies\GLM\glm;
$(SolutionDir)Dependencies\GLUT\freeglut\include;
$(SolutionDir)Dependencies\GLFW\include;
$(SolutionDir)Dependencies\glew-1.13.0\include

Additional Library Directories:
$(SolutionDir)Dependencies\GLM\glm\glm;
$(SolutionDir)Dependencies\GLUT\freeglut\lib;
$(SolutionDir)Dependencies\GLFW\lib-vc2017;
$(SolutionDir)Dependencies\glew-1.13.0\lib\Release\Win32

Linked Libraries: 
OpenGL32.lib;freeglut.lib;glew32s.lib;glfw3.lib;kernel32.lib;user32.lib;gdi32.lib;winspool.lib;comdlg32.lib;advapi32.lib;shell32.lib;
ole32.lib;oleaut32.lib;uuid.lib;odbc32.lib;odbccp32.lib;%(AdditionalDependencies)

Phong vertex and fragment shaders were located in the project folder.

COSC4370 Colin Candelari 1294337 Homework 3 Phong Shading
