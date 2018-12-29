#include <iostream>
#include <cmath>

double area(int slices,double sliceSize,double poolRadius){
	return 2*poolRadius + sliceSize*slices;
};

double volume(int slices,double sliceSize,double poolRadius){
	double radius0 = poolRadius + sliceSize*slices;
	double radius1 = poolRadius + sliceSize*(slices+1);
	return radius1*radius1 - radius0*radius0;
};

double heatCapacity(double temperature){
	return std::log10(temperature) * 1047.41 - 1848.5;
};

double conductivity(double temperature){
	return temperature*temperature/2000000;
}

int main(){
	double poolRadius, distance, maxTemperature, minTemperature;
	unsigned int layers, frames;
	std::cout << "Lavapool radius, in meters" << std::endl;
	std::cin >> poolRadius;
	std::cout << "Temperature, low end (K)" << std::endl;
	std::cin >> minTemperature;
	std::cout << "Temperature, pool (K)" << std::endl;
	std::cin >> maxTemperature;

	std::cout << "Simulation distance (m)." << std::endl;
	std::cin >> distance;

	std::cout << "Number of layers the simulation should use, (suggested: 200)" << std::endl;
	std::cin >> layers;
	std::cout << "Number of frames the simulation should use, (suggested: 100000)" << std::endl;
	std::cin >> frames;

	double layerTemps[layers];
	double sliceSize = distance/layers;
	for(int i=0;i<layers;i++){
		layerTemps[i] = minTemperature;
	};

	layerTemps[0] = maxTemperature;
	layerTemps[layers-1] = minTemperature;

	for(int i=frames;i--;){
		for(int j=1;j<layers-1;j++){
			double energy = (
				(layerTemps[j-1] - layerTemps[j]) * area(j-1,sliceSize,poolRadius)
				- (layerTemps[j] - layerTemps[j+1]) * area(j,sliceSize,poolRadius)
			) * conductivity(layerTemps[j])/sliceSize;
			layerTemps[j] += energy/(heatCapacity(layerTemps[j]) * volume(j-1,sliceSize,poolRadius));
		};
		layerTemps[0] = maxTemperature;
		layerTemps[layers-1] = minTemperature;//assume both ends are infinite reservoirs
	};
	for(int j=0;j<layers;j++){
		std::cout << layerTemps[j] << std::endl;
	};
	std::cout << "Cylinder wall heat transfer: " << (layerTemps[0]-layerTemps[1]) * conductivity(layerTemps[0])/sliceSize << " W/m^2" << std::endl;
	return 0;
}
