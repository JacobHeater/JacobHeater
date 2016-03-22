using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JacobHeaterPresentation.Startup))]
namespace JacobHeaterPresentation
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
