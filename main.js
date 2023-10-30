let n=parseInt(prompt("Enter the number"));
for(let i=1;i<=n;i++){
    for(let k=2;k<=i;k++){
        document.write("&nbsp&nbsp&nbsp");
    }
    for(let j=i;j<=n;j++){
       
        document.write(j+" ");
    }
    document.write("<br>");
}