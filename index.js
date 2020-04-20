let output = '';
let dataList=[];



function selectedData(data) {
    

    for(i = 1; i <= data; i++) {

    

 if(i % 5 === 0 ||i % 3 === 0 || i % 2 === 0){
    if(i %2 === 0){
        if(output != '')
        output+='-yu' 
        else{
            output ='yu' 
        }
    }
     if(i % 3 === 0){
            if(output !='')
            output += '-gi' 

            else{
                output = 'gi' 
            }
        }
        if(i % 5 === 0){
            if(output != '')
            output += '-oh' 

            else{
                output = 'oh' 
            }
        }
}
        else{
            output = i;
        }
        dataList.push(output);
    }
    return dataList;
}
console.log(selectedData());