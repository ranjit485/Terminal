
const middleFinger = $('<img src="https://media.tenor.com/cKL_o-GbFQsAAAAj/middle-finger.gif' +60+ '/' + 60 + '">');
const img2 = $('<img src="https://media.tenor.com/cKL_o-GbFQsAAAAj/middle-finger.gif' +60+ '/' + 60 + '">');
const Admin = "ranjit";
function CloseModalOne(){
$("#ModalOne").on('hidden.bs.modal', function (e) {
    // Invoke your server side code here.
});
$("#ModalOne").modal("hide");
}
$('ter').terminal({
    ok: function (){
    nn();      
    },
    
    contact : function(userName){
        if (userName=="chita") {
          this.echo('https://wa.me/919665588537');
        }
        if (userName=="ranjit") {
          this.echo('https://wa.me/91');
        }
        if (userName=="raj") {
          this.echo('https://wa.me/91');
        } 
        if (userName=="") {
          this.echo('https://wa.me/91');
        } 
        else {
          this.echo('user Not found');
        }
    },

    help: function () {
        this.echo('<all Commands>');
        this.echo('login <password> for login');
        this.echo('help see all commands');
        this.echo('label <lableName> redirect on <lableName> page ');
        this.echo('serch <query> serch on blog ');
        this.echo('author redirect on blog author page');
        this.echo();
        this.echo();
        this.echo();

    },

    admin: function (name) {
      if (name ==Admin) {
        this.echo('[sub Commands]');
        this.echo('contact <userName>');
        this.echo();
      } 
      else {
        this.echo('admin not found');
      }
    },

    lable: function (labelName) {
      window.open("https://demon-brother.blogspot.com/search/label/"+labelName);
    
    },
    git: function (cmd) {
      if(cmd=="key"){
          this.echo("GITHUB KEY : ")
      }   
    
    },
    close :function(){
      CloseModalOne();
    }
},
{
    greetings:
    'Wellcome to Demon-Brother'   
});
