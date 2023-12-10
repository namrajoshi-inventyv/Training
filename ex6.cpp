//Write a Program to find max number of two.

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int x,y;
    cin >> x >> y;
    if(x >= y){
        cout << "Max number is " << x;
    }
    else{
        cout << "Max number is " << y;
    }
    return 0;
}   