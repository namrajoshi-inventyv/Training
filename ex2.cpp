// Write a Program to find factorial of a given number
// Input 5
// Output 5*4*3*2*1 = 120

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int i = 1,n,a=1;
    cin >> n;
    while(i <= n){
        a = a * i;
        i++;
    }
    cout << i << " " << a << endl;
    return 0;
}       