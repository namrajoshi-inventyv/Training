//Prepare a flowchart for displaying fibonacci series.
//input: - n = 6
//Output: - 0 1 1 2 3 5

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int x = 0,y = 1;
    int n;
    cin >> n;
    if(n == 1)
        cout << "0";
    for(int i=1;i<=n;i++){
        int z = x + y;
        cout << x << " ";
        x = y;
        y = z;
    }
    return 0;
}       