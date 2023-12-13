//Write a Program to find max of 3 numbers.

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int x,y,z;
    cin >> x >> y >> z;
    if(x >= y){
        if(x >= z)
            cout << "x is max and value is " << x;
        else
            cout << "z is max and value is " << z;
    }
    else{
        if(y >= z)
            cout << "y is max and value is " << y;
        else
            cout << "z is max and value is " << z;
    }
    return 0;
}   