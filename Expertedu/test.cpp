#include <iostream>
#include <cmath>
#include <cstdlib>
#include <string>

using namespace std;
int main (){
	int num;
	string name;
cout << "What are your names(surname and first name)?" << endl;
getline(cin, name);
cout << "Enter a number and I will square it for you. \n";
cin >> num;
int ans = pow(num,2.0);
cout << name <<", the square of your number is " << ans << endl;



system ("pause");
return 0;	
}
