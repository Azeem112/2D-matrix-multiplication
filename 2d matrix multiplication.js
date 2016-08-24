M1 = [    [0,1] , [2.3]   ]     ]

M2= [    [1,2] , [0,3]   ]      ]


row_1=sizeof(M1);
row_2=sizeof(M2);

column_1= sizeof(M1[row_1]);
column_2= sizeof(M1[row_2]);

M3=[row_1][column_2];

if(column_1 == row_2){

SUM=0;

//row3=row_1;
//column3=column_2;

for(r=0;r<row_1; r++){  //1
for(c=0; c<column_2;c++){  //1

for(z=0; z<column_1; z++){ //0

sum+=M1[r][z]*M2[z][c];

}//Mul


M3[r][c]=sum;
sum=0;

}//column

}///row

}//if