

for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        document.write('*');
    }
    document.write('<br>')
}
document.write('<br>')

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write('*');
    }
    document.write('<br>')
}
document.write('<br>')

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write(`${j}`);
    }
    document.write('<br>')
}
document.write('<br>')

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write(`${i}`);
    }
    document.write('<br>')
}
document.write('<br>')

for(i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        document.write(`${i}`);
    }
    document.write('<br>')
}

