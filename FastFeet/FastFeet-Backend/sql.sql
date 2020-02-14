SELECT "DeliveryProblem"."id", "DeliveryProblem"."description", "etc......" FROM "delivery_problems" AS "DeliveryProblem"
LEFT OUTER JOIN "deliveries" AS "delivery" ON "DeliveryProblem"."delivery_id" = "delivery"."id"
LEFT OUTER JOIN "recipients" AS "delivery->recipient" ON "delivery"."recipient_id" = "delivery->recipient"."id"
LEFT OUTER JOIN "deliverymans" AS "delivery->deliveryman" ON "deli
very"."deliveryman_id" = "delivery->deliveryman"."id" WHERE "DeliveryProblem"."delivery_id" = '2';
