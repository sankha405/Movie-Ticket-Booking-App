output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.movie_ticket.id
}

output "vpc_cidr" {
  description = "CIDR block of the VPC"
  value       = aws_vpc.movie_ticket.cidr_block
}

