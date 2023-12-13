//Write a Program to find max of 4 numbers.

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int x,y,z,w;
    cin >> x >> y >> z >> w;
    if(x >= y){
        if(x >= z){
            if(x >= w){
                cout << "max number is " << x << endl;
            }
            else
                cout << "max number is " << w;
        }
        else{
            if(z >= w){
                cout << "max number is " << z << endl;
            }
            else{
                cout << "max number is " << w;
            }
        }
    }
    else{
        if(y >= z){
            if(y >= w){
                cout << "max number is " << y;
            }
            else{
                cout << "max number is " << w;
            }
        }
        else{
            if(z >= w){
                cout << "max number is " << z;
            }
            else{
                cout << "max number is " << w;
            }
        }
    }
    return 0;
}   