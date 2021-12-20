import document from '@ohos.document';

export default {
    data: {
        title1: "C A R O U S E L",
        title2: "S L I D E R",
        sync_img: '',
        num: 1,
    },
    props:{
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        dot1: '',
        dot2: '',
        dot3: '',
        dot4: '',
        dot5: '',

    },

    nxtimgr: function(){
        if (this.num==1){
            this.sync_img=this.image1;
            this.image1=this.image2;
            this.num+=1;
            this.dot2=this.dot1;
            this.dot1=this.dot3;
        }
        else if (this.num==2){
            this.image1=this.image3;
            this.num+=1;
            this.dot3=this.dot2;
            this.dot2=this.dot4;
        }
        else if (this.num==3){
            this.image1=this.image4;
            this.num+=1;
            this.dot4=this.dot3;
            this.dot3=this.dot5;
        }
        else if (this.num==4){
            this.image1=this.image5;
            this.num+=1;
            this.dot5=this.dot4;
            this.dot4=this.dot1;
        }
        else if (this.num==5){
            this.image1=this.sync_img;
            this.num=1;
            this.dot1=this.dot5;
            this.dot5=this.dot2;
        }



    },
    nxtimgl: function(){
        if (this.num==1){
            this.sync_img=this.image1;
            this.image1=this.image5;
            this.num=5;
            this.dot5=this.dot1;
            this.dot1=this.dot2;
        }
        else if (this.num==2){
            this.image1=this.sync_img;
            this.num-=1;
            this.dot1=this.dot2;
            this.dot2=this.dot3;

        }
        else if (this.num==3){
            this.image1=this.image2;
            this.num-=1;
            this.dot2=this.dot3;
            this.dot3=this.dot4;
        }
        else if (this.num==4){
            this.image1=this.image3;
            this.num-=1;
            this.dot3=this.dot4;
            this.dot4=this.dot5;
        }
        else if (this.num==5){
            this.image1=this.image4;
            this.num-=1;
            this.dot4=this.dot5;
            this.dot5=this.dot1;
        }

    },

}
