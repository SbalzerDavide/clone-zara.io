const app = new Vue({
    el: "#app",
    data:{
        menuShow: false,
        vW: '',
        totalWidth: '',
        vH: '',
        // totalheight: '',
        actualXindex: 0,
        actualYindex: [
            {
                name: 'uomo',
                indexY: 0,
                totHeight: ''
            },
            {
                name: 'donna',
                indexY: 1,
                totHeight: ''
            },
            {
                name: 'bambini',
                indexY: 2,
                totHeight: ''
            },
        ],
        fromLeft: 0,
        fromTop: 0,
        menu: [
            {
                name: 'uomo',
                img: 'man.jpg',
                vertical: true,
                sub:[
                        {
                            name: 'uomo',
                            img: 'man.jpg',
                        },
                        {
                            name: 'collection',
                            img: 'collection-man-woman.jpg'
                        },
                        {
                            name: 'shoes',
                            img: 'shoes&bags.jpg'
                        },
                        {
                            name: 'boxes',
                            img: 'boxes.jpg'
                        },
                        {
                            name: 'video-ma',
                            img: 'video-man.jpg'
                        },
                        {
                            name: 'special-price-ma',
                            img: 'price-man.jpg',
                            title: 'special price'
                        },
                        {
                            name: 'join-life',
                            img: '',
                            title: 'join Life',
                            text: 'Partecipiamo a diversi programmi volti a ridurre l\'inpatto ambiantale dei nostri capi',
                        }
                    ]
            },
            {
                name: 'donna',
                img: 'woman.jpg',
                vertical: true,
                sub:[
                        {
                            name: 'donna',
                            img: 'woman.jpg',
                        },
                        {
                            name: 'collection',
                            img: 'collection-man-woman.jpg'
                        },
                        {
                            name: 'shoes',
                            img: 'shoes&bags.jpg'
                        },
                        {
                            name: 'boxes',
                            img: 'boxes.jpg'
                        },
                        {
                            name: 'video-wo',
                            img: 'video-woman.jpg'
                        },
                        {
                            name: 'special-price-wo',
                            img: 'price-woman.jpg',
                            title: 'special price'
                        },
                        {
                            name: 'join-life',
                            img: '',
                            title: 'join Life',
                            text: 'Partecipiamo a diversi programmi volti a ridurre l\'inpatto ambiantale dei nostri capi',
                        }
                    ]

            },
            {
                name: 'bambini',
                img: 'children.jpg',
                vertical: true,
                sub:[
                        {
                            name: 'bambini',
                            img: 'children.jpg',
                            title: 'new in',
                            text: 'Discover this week\'s pieces from our latest collection',
                        },
                        {
                            name: 'collection-child',
                            img: 'collection-children.jpg',
                            title: 'collection',
                            text: 'Discover this week\'s pieces from our latest collection',
                        },
                        {
                            name: 'ski white',
                            img: 'ski-children.jpg',
                            title: 'ski capsule',
                        },
                        {
                            name: 'shoes',
                            img: 'shoes-children.jpg',
                            title: 'shoes&bags',
                            text: 'Discover the new collection of shoes and bags',
                        },
                        {
                            name: 'boxes',
                            img: 'boxes.jpg'
                        },
                        {
                            name: 'video-child',
                            img: 'video-children.jpg'
                        },
                        {
                            name: 'special-price-child white',
                            img: 'price-children.jpg',
                            title: 'special price'
                        },
                        {
                            name: 'join-life-child',
                            img: 'join-children.jpg',
                            title: 'join Life',
                            text: 'Partecipiamo a diversi programmi volti a ridurre l\'inpatto ambiantale dei nostri capi',
                        }
                    ]

            },
            {
                name: 'shoes&bags',
                vertical: false,
            },
            {
                name: 'carta regalo',
                vertical: false,
            },
            {
                name: 'zara srpls',
                special: true,
            },
            {
                name: 'join life',
            },
        ],
    },
    created(){
        
        console.log('start');
        setTimeout(()=>{
            //set vH, vW and both total
            this.vW = this.$refs.vw.scrollWidth;
            this.totalWidth = this.vW * 3;
            this.vH = this.$refs.vh.scrollHeight;
            this.actualYindex[0].totalHeight = this.vH * this.menu[0].sub.length;
            this.actualYindex[1].totalHeight = this.vH * this.menu[1].sub.length;
            this.actualYindex[2].totalHeight = this.vH * this.menu[2].sub.length;
            this.readIndex();
        },10)
    },
    methods:{
        showMenu(){
            this.menuShow = true;
            console.log(this.menuShow);
        },
        hideMenu(){
            this.menuShow = false;
            console.log(this.menuShow);
        },
        goRight(){
            this.$refs.main.scrollLeft += this.vW;
        },
        goLeft(){
            this.$refs.main.scrollLeft -= this.vW;
        },
        readIndex(){
            this.fromLeft = this.$refs.main.scrollLeft;
            console.log('scroll');
            console.log(this.actualYindex[this.actualXindex].indexY);
            console.log(this.actualXindex);
            
            // index asse x
            this.actualXindex = Math.floor(this.fromLeft/(this.vW -1));
            
            //index asse y
            let fromTop0 = this.$refs.uomo[0].scrollTop;
            let fromTop1 = this.$refs.donna[0].scrollTop;
            let fromTop2 = this.$refs.bambini[0].scrollTop;

            this.actualYindex[0].indexY = Math.floor(fromTop0/this.vH);
            this.actualYindex[1].indexY = Math.floor(fromTop1/this.vH);
            this.actualYindex[2].indexY = Math.floor(fromTop2/this.vH);
        },
        setIndex(name, indexY){
            // this.actualYindex[this.actualXindex].indexY = indexY;
            if (name === 'uomo' ){
                this.$refs.uomo[0].scrollTop = this.vH * (indexY);
            } else if (name === 'donna' ){
                this.$refs.donna[0].scrollTop = this.vH * (indexY);
            } else {
                this.$refs.bambini[0].scrollTop = this.vH * (indexY);
            };
        }

    }
}) 