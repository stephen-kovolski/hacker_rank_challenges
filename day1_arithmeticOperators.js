

// /**
// *   Calculate the area of a rectangle.
// *
// *   length: The length of the rectangle.
// *   width: The width of the rectangle.
// *   
// *	Return a number denoting the rectangle's area.


function getArea(length, width) {
    let area = (length*width);
    
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
**/


function getPerimeter(length, width) {
    let perimeter = ((length+width)*2)
    
    
    return perimeter;
}


function main() {

    //semi scallable
    const length = Math.floor(Math.random()*1001);
    const width = Math.floor(Math.random()*1001);
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}


main()