Product.destroy_all
Customer.destroy_all
Order.destroy_all
OrderItem.destroy_all

p0 = Product.create(name: 'James Steward wand', brand: 'James Steward')
p1 = Product.create(name: 'Antioch Peverell wand', brand: 'Antioch Peverell')
p2 = Product.create(name: 'Ollivander family wand', brand: 'Ollivander family')
p3 = Product.create(name: 'Mykew Gregorovitch wand', brand: 'Mykew Gregorovitch')
p4 = Product.create(name: 'Jimmy Kiddell wand', brand: 'Jimmy Kiddell')
p5 = Product.create(name: 'Arturo Cephalopos wand', brand: 'Arturo Cephalopos')
p6 = Product.create(name: 'Violetta Beauvais wand', brand: 'Violetta Beauvais')
p7 = Product.create(name: 'Johannes Jonker wand', brand: 'Johannes Jonker')
p8 = Product.create(name: 'Thiago Quintana wand', brand: 'Thiago Quintana')
p9 = Product.create(name: 'Peacock feather')

c1 = Customer.create(name: 'Harry Potter', address: 'Hogwarts School of Witchcraft and Wizardry')
c2 = Customer.create(name: 'Ron Weasley', address: 'Hogwarts School of Witchcraft and Wizardry')
c3 = Customer.create(name: 'Hermione Granger', address: 'Hogwarts School of Witchcraft and Wizardry')
c4 = Customer.create(name: 'Albus Dumbledore', address: 'Hogwarts School of Witchcraft and Wizardry')
c5 = Customer.create(name: 'Severus Snape', address: 'Hogwarts School of Witchcraft and Wizardry')
c6 = Customer.create(name: 'Rubeus Hagrid', address: 'Hogwarts School of Witchcraft and Wizardry')
c7 = Customer.create(name: 'Draco Malfoy', address: 'Hogwarts School of Witchcraft and Wizardry')

o1 = Order.create(customer: c1, discount: 0.2, status: 'pending')
o2 = Order.create(customer: c2, discount: 0.2, status: 'pending')
o3 = Order.create(customer: c2, discount: 0.2, status: 'confirmed')
o4 = Order.create(customer: c3, discount: 0.2, status: 'shipped')
o5 = Order.create(customer: c4, discount: 0.2, status: 'pending')

o1.items << p1 # we don't have item class
o1.items << p2 # there's a type mismatch
o1.items << p2 
o2.items << p3
o3.items << p4
o4.items << p5
o4.items << p6
#
# c1.purchases
# c1.pending_purchases
# c1.shipped_purchases
