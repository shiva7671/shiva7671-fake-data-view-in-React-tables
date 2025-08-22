from django.db import models
from random import *
def generate_indian_number():
    first_digit=str(random.choice([6,7,8,9]))
    remaining_digits="".join(str(randint(0,9)) for i in range(9))
    return "+91 "+first_digit+remaining_digits
class Farmer(models.Model):
    name=models.CharField(max_length=50)
    mobile=models.CharField(max_length=14,default=generate_indian_number)
    address=models.TextField()
    date=models.DateField()
    productName=models.CharField(max_length=100)
    totalBill=models.FloatField()

    def __str__(self):
        return f"{self.name}--->{self.totalBill}"


class DirectCompanies(models.Model):
    companyname=models.CharField(max_length=50)
    dealerName=models.CharField(max_length=50)
    dealerMobile=models.CharField(max_length=14,default=generate_indian_number)
    address=models.TextField()
    creditLimit=models.IntegerField()
    usedLimit=models.IntegerField()
    paidLimit=models.IntegerField()
    availableLimit=models.IntegerField()

    def __str__(self):
        return f"{self.companyname}--->{self.availableLimit}"

class KnrDealers(models.Model):
    shopname=models.CharField(max_length=50)
    dealerName=models.CharField(max_length=50)
    dealerMobile=models.CharField(max_length=14,default=generate_indian_number)
    shopAddress=models.TextField()
    creditLimit=models.IntegerField()
    usedLimit=models.IntegerField()
    paidLimit=models.IntegerField()
    availableLimit=models.IntegerField()

    def __str__(self):
        return f"{self.shopname}--->{self.availableLimit}"
