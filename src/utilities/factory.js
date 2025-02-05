import React from 'react';


export default class ComponentFactory {
    /**For building more complex components with formatted data*/
    /**
     * @param {object} data 
     * @param {component} template 
     * @param {class} classModel 
     * @returns 
     */
    static BuildComponent(data, template, classModel){
        const instance = this.FormatDataToMatchClass(classModel,data);
        return React.createElement(template, {data:instance});
    }
    /**
     * @param {array} array - Holds the data, and will helps us loop through the elements  
     * @param {number} limit - Limit the amount of the components you want to create
     * @param {*} template - template component you want to copy
     * @param {*} classModel - Instance of the class your want to create
     */

    
    static BuidlComponents(array,limit,template,style){
        limit = Math.min(limit,array.length);
        //create a shallow copy of an array, and then map and return a new array 
        return array.slice(0,limit).map((element,index) => {
            return React.createElement(template, {key:index, data:element, style:style});
        });
    }
    static BuidlComponentsWithClass(array, template, limit, classModel, style){
        limit = Math.min(limit,array.length);
        //create a shallow copy of an array, and then map and return a new array 
        return array.slice(0,limit).map((data,index) => {
            let instance = this.FormatDataToMatchClass(classModel,data);
            return React.createElement(template, {key:index, data:instance, style:style});
        });
    }


    /**
     * @param {class} classConstructor 
     * @param {object} data 
     * @returns a new instance of a class 
     */
    static FormatDataToMatchClass (classConstructor, data){ 
        return new classConstructor(data);}
}

