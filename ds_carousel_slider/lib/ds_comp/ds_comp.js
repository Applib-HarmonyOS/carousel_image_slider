import document from '@ohos.document';

import app from '@system.app';
export default {
    data: {
        title1: "C A R O U S E L",
        title2: "S L I D E R",
//        Image1: '/common/images/lr.jpg',
//        Image2: '/common/images/i1.jpg',
//        Image3: '/common/images/bg-tv.jpg',
//        Image4: '/common/images/rr.jpg',
//        Image5:'/common/images/mustang.jpg',
        sync_img: '',
        num: 1,
        red_dot: '../ds_img/red_dot.png',
        black_dot: '../ds_img/black_dot.png',
        dot1: '../ds_img/red_dot.png',
        dot2: '../ds_img/black_dot.png',
        dot3: '../ds_img/black_dot.png',
        dot4: '../ds_img/black_dot.png',
        dot5: '../ds_img/black_dot.png',
    },

    nxtimgr: function(){
        console.log("yeh");
        console.log("hi"+this.dot1);

        if (this.num==1){
            this.sync_img=this.Image1;
            this.Image1=this.Image2;
            this.num+=1;
            this.dot1=this.black_dot;
            this.dot2=this.red_dot;
        }
        else if (this.num==2){
            this.Image1=this.Image3;
            this.num+=1;
            this.dot2=this.black_dot;
            this.dot3=this.red_dot;
        }
        else if (this.num==3){
            this.Image1=this.Image4;
            this.num+=1;
            this.dot3=this.black_dot;
            this.dot4=this.red_dot;
        }
        else if (this.num==4){
            this.Image1=this.Image5;
            this.num+=1;
            this.dot4=this.black_dot;
            this.dot5=this.red_dot;
        }
        else if (this.num==5){
            this.Image1=this.sync_img;
            this.num=1;
            this.dot5=this.black_dot;
            this.dot1=this.red_dot;
        }



    },
    nxtimgl: function(){
        if (this.num==1){
            this.sync_img=this.Image1;
            this.Image1=this.Image5;
            this.num=5;
            this.dot1=this.black_dot;
            this.dot5=this.red_dot;
        }
        else if (this.num==2){
            this.Image1=this.sync_img;
            this.num-=1;
            this.dot2=this.black_dot;
            this.dot1=this.red_dot;
        }
        else if (this.num==3){
            this.Image1=this.Image2;
            this.num-=1;
            this.dot3=this.black_dot;
            this.dot2=this.red_dot;
        }
        else if (this.num==4){
            this.Image1=this.Image3;
            this.num-=1;
            this.dot4=this.black_dot;
            this.dot3=this.red_dot;
        }
        else if (this.num==5){
            this.Image1=this.Image4;
            this.num-=1;
            this.dot5=this.black_dot;
            this.dot4=this.red_dot;
        }

    },

}
