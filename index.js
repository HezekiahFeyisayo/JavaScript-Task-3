let input = '';
let dataList=[];



function selectedData(data) {
    

    for(i = 1; i <= data; i++) {

    

 if(i % 5 === 0 ||i % 3 === 0 || i % 2 === 0){
    if(i %2 === 0){
        if(input != '')
        input+='-yu' 
        else{
            input ='yu' 
        }
    }
     if(i % 3 === 0){
            if(input !='')
            input += '-gi' 

            else{
                input = 'gi' 
            }
        }
        if(i % 5 === 0){
            if(input != '')
            input += '-oh' 

            else{
                input = 'oh' 
            }
        }
}
        else{
            input = i;
        }
        dataList.push(input);
    }
    return dataList;
}
console.log(selectedData());