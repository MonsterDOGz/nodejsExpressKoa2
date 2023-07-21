#!/bin/sh
cd C:\Users\gcsoft\Desktop\myProject\nodejsExpressKoa2\blog-1\logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log