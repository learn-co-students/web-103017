# Further Forms & Validations


## Objectives

1. Discuss and Review Forms
2. Strong params
3. Checking information before creating


## Prerequisites
A student should be able to:
1. Set up their own routes
2. Create a form using form_for
3. Create their own models


# Instructions
1. Create a new appication
  `rails new docoffice`
2. Create a new model Doctor
  `rails g model Doctor name speciality registraion_number:integer`
3. Create a new model Patient
  `rails g model Patient name condition`
4. Create the routes for both
    - You may use the `resources` keyword but use the `only` keyword to define only the actions you will be using
5.  Create your controllers
```

class DoctorController < ApplicationController
  def index
    @doctors = Doctor.all
  end


  def show
    @doctor = Doctor.find(params[:id]
  end


  def new
    @doctor = Doctor.new
  end


  def create
    @doctor = Doctor.create(name: params[:doctor][:name], speciality: params[:doctor][:speciality], registration_number: params[:doctor][:registration_number])
  end

  def edit
    @doctor = Doctor.find(params[:id])
  end


  def update
    @doctor = Doctor.find(params[:id])
    @doctor.update(name: params[:doctor][:name], speciality: params[:doctor][:speciality], registration_number: params[:doctor][:registration_number])
  end
end

```
6. Create your corresponding views

  `new.html.erb`
```
  <%= form_for @doctor do |f| %>
    <%= f.label :name %>
    <%= f.text_field :name %>


    <%= f.label :speciality %>
    <%= f.text_field :speciality %>
    <%= f.label :registration_number %>
    <%= f.text_field :registration_number %>

    <%= f.submit %>
  <% end %>

```




7. Let's add some validations for your model



> Why Use Validations?
  Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well. - [Rails Guides](http://edgeguides.rubyonrails.org/active_record_validations.html)

`song.rb`

```
class Doctor < ApplicationRecord
  validates :title, presence: :true
  validates :registration_number, length: { is: 6 }
end

```

8. Let's fix our controllers


```
  def create

    @doctor = Doctor.new(name: params[:doctor][:name], speciality: params[:doctor][:speciality], registration_number:params[:doctor][:registration_number])
    if @doctor.valid?
      @doctor.save
    else
      render 'new'
    end
  end


```

9. Mass Assignment


At the bottom of `doctors_controller.rb`

```
  private
    def doctor_params
      params.require(:doctor).permit(:name, :speciality, :registration_number)
    end
  end
```


```
  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.valid?
      @doctor.save
    else
      render 'new'
    end
  end

```





## Resources

* [Security](http://guides.rubyonrails.org/v3.2.8/security.html)
* [Rails Guides](http://edgeguides.rubyonrails.org/active_record_validations.html)
 
