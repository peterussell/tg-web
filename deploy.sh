#!/bin/bash

# upload files
aws s3 cp ./dist s3://threegreen-test --recursive --acl public-read

