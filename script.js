

    function Button(text){
        this.text = text || 'Hello';
    }


    Button.prototype = {
        create: function(){
            this.$element = $('<button>');
            this.$element.text(this.text);
            // let self = this;
            // this.$element.click(function(){ //this => <button>
            //     alert(self.text);            // 
            // });
            this.$element.click(()=>{ //this => Button {}
                alert(this.text)
            })
            this.$element.appendTo($('body'));
        }
    }

    let btn1 = new Button("Hej");

    btn1.create();