#include <iostream>
using namespace std;

int main()
{
//-------WHILE LOOP-------
    int N;
    cin>> N;

    while(N>0){
        cout<<N<<endl;
        N--;

    }


 // now here N=0, so that we again input our N.

// -------FOR LOOP---------
     cin>>N;

for(int num=N; num>0;num--){
    cout<<num<<endl;

}

    return 0;

}