import os
import django
import random
from faker import Faker

# Setup Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from testapp.models import Farmer, DirectCompanies, KnrDealers

fake = Faker("en_IN")  # Indian locale for addresses, phone numbers

# Helper function to generate Indian phone number
def generate_indian_number():
    first_digit = str(random.choice([6, 7, 8, 9]))
    remaining_digits = "".join(str(random.randint(0, 9)) for _ in range(9))
    return "+91 " + first_digit + remaining_digits

# ------------------------
# Generate Fake Farmers
# ------------------------
def create_farmers(n=20):
    for _ in range(n):
        Farmer.objects.create(
            name=fake.name(),
            mobile=generate_indian_number(),
            address=fake.address(),
            date=fake.date_this_year(),
            productName=random.choice(["Wheat", "Rice", "Corn", "Tomato", "Chili"]),
            totalBill=round(random.uniform(500, 5000), 2)
        )
    print(f"{n} fake farmers created!")

# ------------------------
# Generate Fake DirectCompanies
# ------------------------
def create_direct_companies(n=10):
    for _ in range(n):
        credit = random.randint(50000, 500000)
        used = random.randint(0, credit//2)
        paid = random.randint(0, used)
        available = credit - used + paid
        DirectCompanies.objects.create(
            companyName=fake.company(),
            dealerName=fake.name(),
            dealerMobile=generate_indian_number(),
            address=fake.address(),
            creditLimit=credit,
            usedLimit=used,
            paidLimit=paid,
            availableLimit=available
        )
    print(f"{n} fake direct companies created!")

# ------------------------
# Generate Fake KnrDealers
# ------------------------
def create_knr_dealers(n=10):
    for _ in range(n):
        credit = random.randint(20000, 200000)
        used = random.randint(0, credit//2)
        paid = random.randint(0, used)
        available = credit - used + paid
        KnrDealers.objects.create(
            shopname=fake.company(),
            dealerName=fake.name(),
            dealerMobile=generate_indian_number(),
            shopAddress=fake.address(),
            creditLimit=credit,
            usedLimit=used,
            paidLimit=paid,
            availableLimit=available
        )
    print(f"{n} fake KNR dealers created!")

# ------------------------
# Run all
# ------------------------
if __name__ == "__main__":
    create_farmers(20)
    create_direct_companies(10)
    create_knr_dealers(10)
    print("All fake data generated successfully!")
