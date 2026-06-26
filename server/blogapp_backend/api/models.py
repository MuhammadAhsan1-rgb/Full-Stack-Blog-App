from django.db import models

class appModel(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    details = models.CharField(max_length=100)
    date = models.DateField(auto_now=True)
    