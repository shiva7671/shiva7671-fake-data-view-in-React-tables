from django.shortcuts import render
from django.http import JsonResponse
from testapp.models import Farmer,DirectCompanies,KnrDealers
def farmer_json(request):
    farmers=list(Farmer.objects.all().values("name","mobile","address","date","productName","totalBill"))
    return JsonResponse({"farmers":farmers},safe=False)


def directcompanies_json(request):
    companies=list(DirectCompanies.objects.all().values("companyname","dealerName","dealerMobile","address","creditLimit","usedLimit","paidLimit","availableLimit"))
    return JsonResponse({"companies":companies},safe=False)

def knrdealers_json(request):
    knrdealers=list(KnrDealers.objects.all().values("shopname","dealerName","dealerMobile","shopAddress","creditLimit","usedLimit","paidLimit","availableLimit"))
    return JsonResponse({"knrdealers":knrdealers},safe=False)