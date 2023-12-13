// Write a program of given input to get expected output
// input : - 5
// output : - 5 + 4 + 3 + 2 + 1 = 15

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int i = 1,n,a=1;
    cin >> n;
    while(i < n){
        i++;
        a = a + i;
    }
    cout << i << " " << a << endl;
    return 0;
}   