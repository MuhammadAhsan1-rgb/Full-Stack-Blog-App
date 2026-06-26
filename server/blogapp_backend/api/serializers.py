from rest_framework import serializers
from .models import appModel

class appSerializer(serializers.ModelSerializer):
    class Meta:
        model = appModel
        fields = "__all__"