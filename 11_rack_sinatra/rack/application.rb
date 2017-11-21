require 'pry'

class Application
  
  
  
  
  def call(env)
    req = Rack::Request.new(env)
    resp = Rack::Response.new
    
    
    resp.write("hello world")
    
    
    if req.path.match(/cats/)
      [200, {"Content-Type" =>  "text/html"}, ["<p>Hello Cats</p></div>"]]
    elsif req.path.match(/dogs/)
      [200, {"Content-Type" =>  "text/html"}, ["<p>Hello Cats</p></div>"]]
    else 
      [404, {"Content-Type" =>  "text/html"}, ["<p>Not Found</p></div>"]]
    end
    
    resp.finish
  end
end