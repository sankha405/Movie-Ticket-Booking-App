resource "aws_s3_bucket" "import_test" {
  bucket = "movie-ticket-import-test-703621194250"

  tags = {
    Environment = "test"
  }

}