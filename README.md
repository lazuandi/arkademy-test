# Arkademy Test
## Development

### Project Setup
Please make sure you already have prettier and flow language support extension on VS Code 
this project use yarn package manager, please install yarn first before you run the setup
```
git clone https://github.com/lazuandi/arkademy-test
//enter directory you have cloned
cd ./arkademy-test
yarn
```

### Build flow code
```
yarn build
//after you ran this comman you can check that code have builded on lib folder
```

### Running the code
Please make sure you have run ``yarn build`` before you run the code
```
//enter lib directory
cd ./lib
//example run command
node Question-5.flow.js
```